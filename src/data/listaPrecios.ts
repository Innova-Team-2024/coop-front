/**
 * LISTA DE PRECIOS - Cooperativa
 * Archivo fuente de datos para los planes y precios de servicios.
 * Después de editar, ejecutar: npm run build && npm run deploy
 *
 * FORMATO DE DATOS:
 * Cada array representa:
 * [Velocidad, Precio Socios, Precio Abonados, Destacado (true/false)]
 */

export const precios = {
  // ========================================
  // 🎯 PROMOCIONES DESTACADAS
  // ========================================
  promociones: {
    titulo: "PLANES PROMOCIONALES",
    instalacion: 6000,
    planes: [
      {
        velocidad: "300 MB + TV",
        descripcion: "Internet 300 MB + TV + 300 CANALES + Teléfono",
        socios: 43854,
        abonados: 50000,
        nota: "Precio especial para socios",
        destacado: true,
      },
      // Agregar más promociones aquí...
    ],
  },

  // ========================================
  // 🌐 SOLO INTERNET (WiFi)
  // ========================================
  internet: {
    id: "wifi",
    titulo: "WiFi",
    instalacion: 5000,
    planes: [
      // [Velocidad, Precio Socios, Precio Abonados, Destacado]
      ["20 Megas", 15000, 18000, false],
      ["30 Megas", 18000, 21383, false],
      ["40 Megas", 21000, 25379, false],
      ["50 Megas", 22000, 26553, true], // Destacado
      ["100 Megas", 27000, 32388, false],
      ["200 Megas", 36000, 43019, false],
      ["300 Megas", 39000, 46480, false],
    ],
  },

  // ========================================
  // 📞 INTERNET + TELEFONÍA (WiFi + VoIP)
  // ========================================
  wifiVoip: {
    id: "voip",
    titulo: "WiFi + VoIP",
    instalacion: 7000,
    planes: [
      // [Velocidad, Precio Socios, Precio Abonados, Destacado]
      ["20 Megas", 30403, 31928, false],
      ["30 Megas", 32497, 34255, false],
      ["40 Megas", 36094, 38251, false],
      ["50 Megas", 37150, 39425, false],
      ["100 Megas", 42401, 45260, false],
      ["200 Megas", 51969, 55891, false],
      ["300 Megas", 55084, 59352, false],
    ],
  },

  // ========================================
  // 📺 INTERNET + TELEVISIÓN (WiFi + IPTV)
  // ========================================
  wifiIptv: {
    id: "iptv",
    titulo: "WiFi + IPTV",
    instalacion: 8000,
    planes: [
      // [Velocidad, Precio Socios, Precio Abonados, Destacado]
      ["20 Megas", 26600, 31928, false],
      ["30 Megas", 28600, 34255, false],
      ["40 Megas", 31900, 38251, false],
      ["50 Megas", 32900, 39425, false],
      ["100 Megas", 37700, 45260, true], // Destacado
      ["200 Megas", 46600, 55891, false],
      ["300 Megas", 49600, 59352, false],
    ],
  },

  // ========================================
  // 🎁 COMBO COMPLETO (WiFi + IPTV + VoIP)
  // ========================================
  comboCompleto: {
    id: "combo",
    titulo: "WiFi + IPTV + VoIP",
    instalacion: 10000,
    planes: [
      // [Velocidad, Precio Socios, Precio Abonados, Destacado]
      ["20 Megas", 28800, 34554, false],
      ["30 Megas", 30600, 36881, false],
      ["40 Megas", 34000, 40877, false],
      ["50 Megas", 35000, 42051, false],
      ["100 Megas", 39900, 47886, true], // Destacado
      ["200 Megas", 48800, 58517, false],
      ["300 Megas", 51800, 61978, false],
    ],
  },
} as const;

// Tipos inferidos automáticamente
export type Precios = typeof precios;
