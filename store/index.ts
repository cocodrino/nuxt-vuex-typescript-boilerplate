import { getModule, VuexModule, Module } from 'vuex-module-decorators'

//read full documentation here https://championswimmer.in/vuex-module-decorators/pages/core/state.html
@Module
class ArticlesModule extends VuexModule {
  feed: string[] = ['hola', 'probando']
}

export default getModule(ArticlesModule)
