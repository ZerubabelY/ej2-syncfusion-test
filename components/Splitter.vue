<template>
  <ejs-splitter id="default-splitter" height="250px">
    <e-panes>
      <e-pane content="Left Pane"></e-pane>
      <e-pane content="Middle Pane"></e-pane>
      <e-pane content="Right Pane"></e-pane>
    </e-panes>
  </ejs-splitter>
</template>
<script setup>
import {
  SplitterComponent as EjsSplitter,
  PanesDirective as EPanes,
  PaneDirective as EPane,
} from "@syncfusion/ej2-vue-layouts";
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-layouts/styles/material.css";
#app {
  margin: 60px auto;
  max-width: 700px;
}
.e-splitter {
  margin: 0 auto;
}
.e-pane {
  text-align: center;
  align-items: center;
  display: grid;
}

/* default split bar resize handle color */
.e-splitter .e-split-bar.e-split-bar-horizontal .e-resize-handler {
  color: rgba(20, 27, 233, 0.54);
}

/* default split bar resize handle color in hover and active state */
.e-splitter
  .e-split-bar.e-split-bar-horizontal.e-split-bar-hover
  .e-resize-handler,
.e-splitter
  .e-split-bar.e-split-bar-horizontal.e-split-bar-active
  .e-resize-handler {
  color: green;
}

/* split bar arrows */
.e-splitter
  .e-split-bar.e-split-bar-horizontal.e-split-bar-hover
  .e-navigate-arrow.e-arrow-left::before,
.e-splitter
  .e-split-bar.e-split-bar-horizontal.e-split-bar-active
  .e-navigate-arrow.e-arrow-left::before,
.e-splitter
  .e-split-bar.e-split-bar-horizontal.e-split-bar-hover
  .e-navigate-arrow.e-arrow-left::after,
.e-splitter
  .e-split-bar.e-split-bar-horizontal.e-split-bar-active
  .e-navigate-arrow.e-arrow-left::after,
.e-splitter
  .e-split-bar.e-split-bar-horizontal.e-split-bar-hover
  .e-navigate-arrow.e-arrow-right::before,
.e-splitter
  .e-split-bar.e-split-bar-horizontal.e-split-bar-active
  .e-navigate-arrow.e-arrow-right::before,
.e-splitter
  .e-split-bar.e-split-bar-horizontal.e-split-bar-hover
  .e-navigate-arrow.e-arrow-right::after,
.e-splitter
  .e-split-bar.e-split-bar-horizontal.e-split-bar-active
  .e-navigate-arrow.e-arrow-right::after {
  background-color: green;
}

/* split bar arrows - circular border */
.e-splitter
  .e-split-bar.e-split-bar-horizontal.e-split-bar-hover
  .e-navigate-arrow.e-arrow-left,
.e-splitter
  .e-split-bar.e-split-bar-horizontal.e-split-bar-hover
  .e-navigate-arrow.e-arrow-right {
  border-color: rgba(33, 227, 22, 0.5);
}
</style>
