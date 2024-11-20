<template>
  <div class="w-full h-full text-left">
    <div>
      <h1
        class="text-xl text-center py-2 font-medium poppins bg-[#cbdcec] text-[#71b2f3] rounded"
      >
        Metadata
      </h1>
    </div>
    <div v-if="file">
      <div class="mt-3">
        <p class="flex items-center gap-2 text-lg font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 20 20"
          >
            <g fill="#166534">
              <path
                d="M9 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V6.414A2 2 0 0 0 16.414 5L14 2.586A2 2 0 0 0 12.586 2z"
              />
              <path
                d="M3 8a2 2 0 0 1 2-2v10h8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
              />
            </g>
          </svg>
          {{ file.name }}
        </p>

        <div class="grid grid-cols-2 gap-4 mt-4">
          <div>
            <p class="text-sm font-medium text-neutral-500">Size</p>
            <p class="text-base font-light">{{ file.metadata.size }}</p>
          </div>
          <div>
            <p class="text-sm font-medium text-neutral-500">Created Date</p>
            <p class="text-base font-light">
              {{
                new Date(file.metadata.createdDate).toLocaleDateString(
                  "en-US",
                  {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  }
                )
              }}
            </p>
          </div>
          <div>
            <p class="text-sm font-medium text-neutral-500">Author</p>
            <p class="text-base font-light">{{ file.metadata.author }}</p>
          </div>
          <div>
            <p class="text-sm font-medium text-neutral-500">Last Modified</p>
            <p class="text-base font-light">
              {{
                new Date(file.metadata.lastModified).toLocaleDateString(
                  "en-US",
                  {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  }
                )
              }}
            </p>
          </div>
          <div>
            <p class="text-sm font-medium text-neutral-500">File Type</p>
            <p class="text-base font-light">{{ file.metadata.fileType }}</p>
          </div>
          <div>
            <p class="text-sm font-medium text-neutral-500">Page Count</p>
            <p class="text-base font-light">{{ file.metadata.pageCount }}</p>
          </div>
          <div class="col-span-2">
            <p class="text-sm font-medium text-neutral-500">Description</p>
            <p class="text-base font-light">
              {{ file.metadata.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="flex flex-col items-center justify-center w-full h-full">
      <p class="text-lg font-medium">No File Selected</p>
      <p class="text-sm font-light text-neutral-400">
        Select a file to view metadata.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps({
  file: Object,
});
</script>
