# js_ru_23_09_19_30

https://facebook.github.io/react/docs/reconciliation.html
https://babeljs.io/repl/

##ДЗ1: добавить список комментов к статье, который можно открывать и закрывать по нажатию на ссылку/кнопку с надписью открыть/закрыть(меняется)

##ДЗ2.1: Написать propTypes для всех компонентов
##ДЗ2.2: Написать декоратор для функционала "аккордеон"
##ДЗ2.3: При клике на уже открытую статью - закрывать все

links:
* https://facebook.github.io/react/blog/2015/09/02/new-react-developer-tools.html
* https://facebook.github.io/react/docs/reusable-components.html
* https://medium.com/@dan_abramov/mixins-are-dead-long-live-higher-order-components-94a0d2f9e750#.zdiz4yi8x
* https://facebook.github.io/react/docs/component-specs.html

##ДЗ 3.1 Добавить календарь https://github.com/gpbl/react-day-picker и отображать значение выбранного промежутка времени
##ДЗ 3.2 Добавить форму для нового комментария к статье(в CommentList) и по сабмиту делать console.log нового коммента
##ДЗ 3.3 Посмотреть первую часть скринкаста по Flux

links:
* https://react.rocks/
* https://github.com/JedWatson/react-select
* https://github.com/webpack/css-loader
* https://facebook.github.io/react/docs/animation.html
* https://github.com/gpbl/react-day-picker

##ДЗ 4.1 Для SelectFilter достать список статей из стора
##ДЗ 4.2 Создать редюсер для фильтров, хранить значение фильтров в сторе
##ДЗ 4.3 В ArticleList показывать только отфильтрованные статьи

links:
* https://slides.com/romaniakobchuk/deck-9-10-11-13-16
* http://redux.js.org/

##ДЗ 5.1 Написать мидлвар для генерации id
##ДЗ 5.2 Создать функционал добавления коммента к статье
##ДЗ 5.3 Хранить статьи и комменты в виде Immutable.Record
##ДЗ 5.4 Посмотреть 2 часть скринкаста по Flux

links:
* https://facebook.github.io/immutable-js/docs/
* https://slides.com/romaniakobchuk/deck-9-10-11-13-16/live#/7
* http://redux.js.org/docs/advanced/Middleware.html
* https://github.com/gaearon/redux-devtools
* https://github.com/zalmoxisus/redux-devtools-extension


##ДЗ 6.1 При открытии списка комментов читать их из API(пример: /api/comment?article=56c782f17b4e0ba78c7ad717)
##ДЗ 6.2 Сделать аналогичный AC с использованием thunk
##ДЗ 6.3 показывать Loader во время загрузки комментов

links:
* https://github.com/xgrommx/awesome-redux
* https://github.com/evgenyrodionov/redux-logger
* https://www.npmjs.com/package/redux-promise
* https://github.com/ashaffer/redux-multi
* https://github.com/gaearon/redux-thunk

##ДЗ 7.1 Создать роут с пагинацией всех доступных комментов(API: /api/comment?limit=5&offset=10)