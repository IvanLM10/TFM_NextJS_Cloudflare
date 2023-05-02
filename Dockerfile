# Selecciona una imagen base de Node.js
FROM node:16-alpine

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos del proyecto a la imagen
COPY package*.json ./
COPY . .

# Instala las dependencias
RUN npm install

# Compila el proyecto
RUN npm run build

# Exponer el puerto que utiliza Next.js
EXPOSE 3000

# Inicia la aplicación
CMD ["npm", "start"]