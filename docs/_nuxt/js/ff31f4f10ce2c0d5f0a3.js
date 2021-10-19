(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{402:function(n,e,t){"use strict";t.r(e),e.default="# 区域面积图\n\n区域面积图将折线到坐标轴的空间设置背景色，用区域面积表达数据。相比普通的折线图，区域面积图的视觉效果更加饱满丰富，在系列不多的场景下尤其适用。\n\n```js live\noption = {\n  xAxis: {\n    data: ['A', 'B', 'C', 'D', 'E']\n  },\n  yAxis: {},\n  series: [\n    {\n      data: [10, 22, 28, 23, 19],\n      type: 'line',\n      areaStyle: {}\n    },\n    {\n      data: [25, 14, 23, 35, 10],\n      type: 'line',\n      areaStyle: {\n        color: '#ff0',\n        opacity: 0.5\n      }\n    }\n  ]\n};\n```\n\n通过 [`areaStyle`](${optionPath}series-line.areaStyle) 设置折线图的填充区域样式，将其设为为 `{}` 表示使用默认样式，即使用系列的颜色以半透明的方式填充区域。如果想指定特定的样式，可以通过设置 `areaStyle` 下的配置项覆盖，如第二个系列将填充区域的颜色设为不透明度为 0.5 的黄色。\n"}}]);