<template>
  <div class="h-screen px-10 pt-20 text-left max-w-96">
    <div v-if="file">
      <div class="flex items-center justify-between">
        <h2 class="text-lg font-semibold">Metadata</h2>
        <!-- Actions -->
        <div></div>
      </div>

      <!-- size: "1.8 MB",
      createdDate: "2023-04-15T09:30:00",
      author: "Jane Smith",
      lastModifiedDate: "2024-08-20T11:10:00",
      fileType: "PDF",
      pageCount: 12,
      description:
        "Detailed project analysis for the mid-year review, including key milestones achieved.", -->
      <!-- Information -->
      <div class="">
        <p class="flex items-center gap-2 text-lg font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1rem"
            height="1rem"
            viewBox="0 0 512 512"
          >
            <path
              fill="#71b2f3"
              d="M372.4 512L512 372.4H372.4zM93.1 93.1V512h256V349.1H512v-256zM418.9 0H0v418.9h46.5V46.5h372.4z"
            />
          </svg>
          {{ file.name }}
        </p>

        <div class="grid grid-cols-2 gap-4 mt-4">
          <div>
            <p class="text-sm font-medium text-neutral-500">Size</p>
            <p class="text-lg font-semibold">{{ file.metadata.size }}</p>
          </div>
          <div>
            <p class="text-sm font-medium text-neutral-500">Created Date</p>
            <p class="text-lg font-semibold">{{ file.metadata.createdDate }}</p>
          </div>
          <div>
            <p class="text-sm font-medium text-neutral-500">Author</p>
            <p class="text-lg font-semibold">{{ file.metadata.author }}</p>
          </div>
          <div>
            <p class="text-sm font-medium text-neutral-500">Last Modified</p>
            <p class="text-lg font-semibold">
              {{ file.metadata.lastModifiedDate }}
            </p>
          </div>
          <div>
            <p class="text-sm font-medium text-neutral-500">File Type</p>
            <p class="text-lg font-semibold">{{ file.metadata.fileType }}</p>
          </div>
          <div>
            <p class="text-sm font-medium text-neutral-500">Page Count</p>
            <p class="text-lg font-semibold">{{ file.metadata.pageCount }}</p>
          </div>
          <div class="col-span-2">
            <p class="text-sm font-medium text-neutral-500">Description</p>
            <p class="text-lg font-semibold">{{ file.metadata.description }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
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

console.log("Metadata props: ", props);
</script>
