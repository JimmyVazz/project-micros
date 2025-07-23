# ✅ Usamos una imagen base oficial de Node.js en su versión 18
FROM node:18

# ✅ Establecemos el directorio de trabajo dentro del contenedor
WORKDIR /app

# ✅ Copiamos todos los archivos del proyecto al contenedor
COPY . .

# ✅ Instalamos las dependencias del proyecto
RUN npm install

# ✅ Exponemos el puerto 3002 para que se pueda acceder a la app desde fuera
EXPOSE 3002

# ✅ Comando por defecto que se ejecuta al iniciar el contenedor
CMD ["npm", "start"]