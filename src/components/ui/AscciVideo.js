'use client';
import { useEffect, useRef, useState } from 'react';
import 'xterm/css/xterm.css';

export default function TerminalPlayer({ src, customCols, customRows }) {
    const terminalRef = useRef(null);
    const [dimensions, setDimensions] = useState({ cols: 80, rows: 24 }); // Valores por defecto

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const { Terminal } = require('xterm');
        const { FitAddon } = require('xterm-addon-fit');

        // Primero obtenemos los metadatos para configurar el terminal correctamente
        fetch(src)
            .then(res => res.text())
            .then(text => {
                const lines = text.trim().split('\n');
                const header = JSON.parse(lines[0]);

                // Usar las dimensiones del archivo o las personalizadas (si se proporcionaron)
                // También aseguramos dimensiones mínimas razonables
                const cols = customCols || header.width || 80;
                const rows = customRows || header.height || 24;

                setDimensions({ cols, rows });

                // Ahora creamos el terminal con las dimensiones correctas
                const term = new Terminal({
                    fontFamily: 'monospace',
                    fontSize: 14,
                    cursorBlink: true,
                    theme: {
                        background: '#323232'
                    },
                    cols: Math.max(cols, 80), // Asegurar un ancho mínimo de 80
                    rows: rows,
                    scrollback: 1000, // Permitir scroll
                    convertEol: true
                });

                // Addon para ajustar el terminal al contenedor
                const fitAddon = new FitAddon();
                term.loadAddon(fitAddon);

                term.open(terminalRef.current);
                try {
                    fitAddon.fit();
                } catch (e) {
                    console.log('Error al ajustar terminal:', e);
                }

                // Reproducir el contenido
                let time = 0;
                for (let i = 1; i < lines.length; i++) {
                    try {
                        const event = JSON.parse(lines[i]);
                        if (event[1] === 'o') {
                            const delay = event[0];
                            const content = event[2];

                            time += delay * 1000;
                            setTimeout(() => {
                                term.write(content);
                            }, time);
                        }
                    } catch (err) {
                        console.error('Error parsing event:', err);
                    }
                }

                return () => term.dispose();
            })
            .catch(err => {
                console.error('Error al cargar el archivo cast:', err);
            });
    }, [src, customCols, customRows]);

    return (
        <div
            ref={terminalRef}
            style={{
                height: '400px',
                width: '100%',
                background: 'black',
                borderRadius: '8px',
                overflow: 'hidden'
            }}
        />
    );
}