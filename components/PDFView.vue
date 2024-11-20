<template>
  <div class="w-full h-full">
    <div class="px-5">
      <h1
        class="text-xl text-center py-2 font-medium poppins bg-[#cbdcec] text-[#71b2f3] rounded"
      >
        PDF Preview
      </h1>
    </div>
    <div class="w-full h-full" v-if="selectedFile">
      <ejs-pdfviewer
        id="pdfviewer"
        ref="pdfviewer"
        :documentPath="documentPath"
        :resourceUrl="resourceUrl"
      >
      </ejs-pdfviewer>
    </div>
    <div v-else class="flex flex-col items-center justify-center h-full gap-5">
      <img src="/icons/test.png" alt="" class="w-64 h-auto" />
      <p class="text-lg">No file is selected</p>
    </div>
  </div>
</template>

<script>
import {
  PdfViewerComponent,
  Toolbar,
  Magnification,
  Navigation,
  LinkAnnotation,
  BookmarkView,
  ThumbnailView,
  Print,
  TextSelection,
  TextSearch,
  Annotation,
  FormFields,
  FormDesigner,
  PageOrganizer,
} from "@syncfusion/ej2-vue-pdfviewer";
import { SwitchComponent } from "@syncfusion/ej2-vue-buttons";

export default {
  components: {
    "ejs-pdfviewer": PdfViewerComponent,
  },
  props: {
    selectedFile: Object,
  },
  data: function () {
    return {
      documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
      resourceUrl:
        "https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib",
    };
  },
  provide: {
    PdfViewer: [
      Toolbar,
      Magnification,
      Navigation,
      LinkAnnotation,
      BookmarkView,
      ThumbnailView,
      Print,
      TextSelection,
      TextSearch,
      Annotation,
      FormFields,
      FormDesigner,
      PageOrganizer,
    ],
  },
  methods: {
    change: function (args) {
      var viewer = this.$refs.pdfviewer.ej2Instances;
      if (args.checked) {
        viewer.serviceUrl = "";
      } else {
        viewer.serviceUrl =
          "https://services.syncfusion.com/vue/production/api/pdfviewer";
      }
      viewer.dataBind();
      viewer.load(viewer.documentPath, null);
    },
  },
};
</script>

<style scoped>
#pdfviewer {
  height: 100%;
  width: 100%;
  border-radius: 20px;
  margin-top: 20px;
}

#pdfviewer_viewerContainer {
  height: 100%;
  width: 100%;
}

.flex-container {
  display: flex;
  justify-content: flex-end;
}

.render-mode-info {
  background: none;
  border: none;
  padding-left: 0px;
}

.render-mode-info .render-mode-info-icon {
  height: 16px;
  width: 16px;
}

.switchLabel {
  font-family: "Segoe UI", "GeezaPro", "DejaVu Serif", sans-serif;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.24px;
  text-align: right;
  font-size: 14px;
}
</style>
