# 🐳 Usamos la imagen oficial de Node.js v18 como base
FROM node:18

# 📁 Establecemos el directorio de trabajo dentro del contenedor
WORKDIR /app

# 📦 Copiamos todos los archivos de la app al contenedor
COPY . .

# 📥 Instalamos las dependencias de Node.js
RUN npm install

# 🌐 Exponemos el puerto que usará la aplicación (ajusta según tu backend)
EXPOSE 3001

# 🚀 Comando que se ejecuta cuando el contenedor inicia
CMD ["npm", "start"]
