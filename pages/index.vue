<template>
  <div id="app" class="h-screen default-splitter bg-neutral-50">
    <ejs-splitter id="splitter" ref="splitterObj" height="100vh" width="100vw">
      <e-panes>
        <e-pane min="20%" size="20%" content="#documents"></e-pane>
        <e-pane min="20%" max="60%" size="60%" content="#pdf-view"></e-pane>
        <e-pane min="20%" size="20%" content="#last-pane-content"></e-pane>
      </e-panes>
    </ejs-splitter>

    <!-- pane contents -->
    <div id="documents" style="display: none; height: 100%; padding: 10px">
      <div
        class="!overflow-hidden bg-white h-full shadow-[_0px_0px_17px_0px_rgba(0,0,0,0.06)] rounded-lg p-5"
      >
        <documents @file-selected="handleFileSelection" />
      </div>
    </div>

    <div id="pdf-view" style="display: none; height: 100%; padding: 10px">
      <div
        class="!overflow-hidden bg-white h-full w-[1000px] shadow-[_0px_0px_17px_0px_rgba(0,0,0,0.06)] rounded-lg py-5"
      >
        <PDFView :selectedFile="selectedFile" />
      </div>
    </div>

    <div
      id="last-pane-content"
      style="
        display: none;
        height: 100%;
        width: 100%;
        padding: 10px;
        position: relative;
      "
    >
      <div
        class="!overflow-hidden bg-white h-full shadow-[_0px_0px_17px_0px_rgba(0,0,0,0.06)] rounded-lg p-5 w-full"
      >
        <Metadata :key="file" :file="selectedFile" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {
  SplitterComponent as EjsSplitter,
  PanesDirective as EPanes,
  PaneDirective as EPane,
} from "@syncfusion/ej2-vue-layouts";
import { registerLicense } from "@syncfusion/ej2-base";
import Documents from "~/components/Documents.vue";
import PDFView from "~/components/PDFView.vue";
import Metadata from "~/components/Metadata.vue";

registerLicense(
  "Ngo9BigBOggjHTQxAR8/V1NDaF1cX2hIfEx3Qnxbf1x0ZFFMZVxbR3RPIiBoS35RckRiWHdeeHRVRGhUV01+"
);

const selectedFile = ref(null);

/**
 * Handle file selection event
 * @param {any} selectedFile
 */
const handleFileSelection = (file: any) => {
  selectedFile.value = file;
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-layouts/styles/material.css";

.e-splitter {
  margin: 0 auto;
}
.e-pane {
  text-align: center;
  align-items: center;
  display: grid;
  margin: 20px;
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
