How2 create functional react components using Next Page for props data.  

Creating next-app
1. pnpm create next-app@latest --experimental-app
- enter name
2. create app/components/color.tsx
- import NextPage
- add interface Props type
- add Color function use NextPage<Props>
3. update app/page.tsx
- import Colors
- pass color props