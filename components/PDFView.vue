<template>
  <div class="w-full h-full">
    <div class="px-5">
      <h1
        class="text-xl text-center py-2 font-medium poppins bg-[#cbdcec] text-[#71b2f3] rounded"
      >
        PDF Preview
      </h1>
    </div>
    <div v-if="loading" class="flex items-center justify-center w-full h-full">
      <div class="flex items-center justify-center h-full">
        <div
          class="w-32 h-32 ease-linear border-8 border-t-8 border-gray-200 rounded-full loader"
        ></div>
      </div>
    </div>

    <div v-else class="w-full h-full">
      <div class="w-full h-full" v-if="selectedFile">
        <ejs-pdfviewer
          id="pdfviewer"
          ref="pdfviewer"
          :documentPath="documentPath"
          :resourceUrl="resourceUrl"
        >
        </ejs-pdfviewer>
      </div>
      <div
        v-else
        class="flex flex-col items-center justify-center h-full gap-5"
      >
        <img src="/icons/test.png" alt="" class="w-64 h-auto" />
        <p class="text-lg">No file is selected</p>
      </div>
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
      documentPath: "",
      resourceUrl:
        "https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib",
      loading: false,
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
  async mounted() {
    if (this.selectedFile?.path && this.$refs.pdfviewer) {
      this.loading = true;
      this.documentPath = this.selectedFile.path;
      try {
        const res = await fetch(this.documentPath);

        if (res.ok) {
          const blob = await res.blob();
          // Change to base64
          const url = URL.createObjectURL(blob);
          this.documentPath = url;
        }

        this.$refs.pdfviewer.ej2Instances.load("", null);
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    }
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

  watch: {
    selectedFile: {
      handler: async function (newVal) {
        if (!newVal) {
          this.documentPath = "";
          return;
        }

        this.documentPath = newVal.path;
        this.loading = true;
        try {
          const res = await fetch(this.documentPath);

          if (res.ok) {
            const blob = await res.blob();
            // Change to base64
            const url = URL.createObjectURL(blob);
            this.documentPath = url;
          }

          this.$refs.pdfviewer.ej2Instances.load("", null);
        } catch (error) {
          console.log(error);
        } finally {
          this.loading = false;
        }
      },
      immediate: true,
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
