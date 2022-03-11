# Apercu

Ce projet a été réalisé pour une équipe nord-américaine de modder du jeu Crusader Kings 3 édité par Paradox Interactive afin de servir de catalogue en ligne de leurs assets.

Steam Workshop, la platforme de téléchargement des modifications du jeu, n'a pas une interface utilisateur qui convient pour avoir un apercu exhaustif du contenu des mods. De plus, le mod de l'équipe américaine est très populaire (plus de 100 000 téléchargements) et contient un très grand nombre d'assets ce qui accentue encore plus le problème.

&nbsp;

# Calendrier et technologies utilisées

Ce projet a été réalisé en une semaine et se devait d'être flexible et indépendant une fois la structure initiale, réalisée en NEXT-JS, mise en ligne, c'est pourquoi Contentful, comme headless CMS a été privilégié du fait de sa facilité d'utilisation et de prise en main.

&nbsp;

# Approche

Ce projet se devait d'être indépendant une fois le front-end réalisé en NEXT-JS, j'ai ainsi créé pour l'équipe un compte gmail, un compte Contentful ainsi qu'un modèle initial dans Contentful afin qu'ils puissent rajouter facilement leur catalogue, avec photos, descriptions et autre contenu qui serait ensuite automatiquement injecté en CI/CD avec la mise en ligne sur Github et l'hébergement sur Vercel.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
