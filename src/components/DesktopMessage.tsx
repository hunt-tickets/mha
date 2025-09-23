'use client';

import { useState, useEffect } from 'react';
import QRCode from 'qrcode';

const DesktopMessage: React.FC = () => {
  const [qrCodeUrl, setQrCodeUrl] = useState<string>('');

  useEffect(() => {
    const generateQR = async () => {
      try {
        const currentUrl = window.location.href;
        const qrCode = await QRCode.toDataURL(currentUrl, {
          width: 200,
          margin: 2,
          color: {
            dark: '#000000',
            light: '#FFFFFF'
          }
        });
        setQrCodeUrl(qrCode);
      } catch (error) {
        console.error('Error generating QR code:', error);
      }
    };

    generateQR();
  }, []);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-8">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-bold text-foreground mb-6">
          Evento Maria Helena Amador
        </h1>

        <p className="text-foreground/80 mb-6">
          Esta experiencia está optimizada para dispositivos móviles.
        </p>

        <p className="text-foreground/60 mb-8">
          Escanea el código QR con tu celular para acceder:
        </p>

        {qrCodeUrl && (
          <div className="flex justify-center mb-6">
            <img
              src={qrCodeUrl}
              alt="QR Code para acceder desde móvil"
              className="rounded-lg shadow-lg"
            />
          </div>
        )}

        <p className="text-sm text-foreground/50">
          Gimnasio Moderno - Bogotá
        </p>
      </div>
    </div>
  );
};

export default DesktopMessage;