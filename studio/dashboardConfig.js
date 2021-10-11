export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6163ed546ff9824059dbf6f1',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-21q2nroc',
                  apiId: 'd89b5d74-8f43-4e2b-80bb-7b9a03d3d721'
                },
                {
                  buildHookId: '6163ed55a841fe370f8bf42d',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-y5r4xkpw',
                  apiId: '8b6b1b5e-dbca-4317-af05-3a9fb96b99f3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/endrjusf/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-y5r4xkpw.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
