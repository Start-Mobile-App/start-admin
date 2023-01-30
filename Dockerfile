# pull the base image
FROM node:14.17-alpine3.10  as build

ARG API_URL
ARG CGU_URL

ENV SKIP_PREFLIGHT_CHECK=true
ENV REACT_APP_API_URL=$API_URL
ENV REACT_APP_CGU_URL=$CGU_URL

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./

RUN npm install
RUN npm install react-scripts@3.4.1 -g --silent
COPY . ./
RUN npm run build

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
# new
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]