import { PdfViewerComponent } from "@syncfusion/ej2-vue-pdfviewer";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("PdfViewer", PdfViewerComponent);
});
