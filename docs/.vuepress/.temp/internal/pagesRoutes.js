import { Vuepress } from '@vuepress/client'

const routeItems = [
  ["v-8daa1a0e","/",{"title":"hello wrold"},["/index.html","/README.md"]],
  ["v-b05c953e","/componentDocs/card%20copy.html",{"title":"card 组件"},["/componentDocs/card copy.html","/componentDocs/card%20copy","/componentDocs/card copy.md","/componentDocs/card%20copy.md"]],
  ["v-10407839","/componentDocs/card.html",{"title":"card 组件"},["/componentDocs/card","/componentDocs/card.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: '404',
      path: '/:catchAll(.*)',
      component: Vuepress,
    }
  ]
)
