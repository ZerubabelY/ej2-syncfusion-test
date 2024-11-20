<template>
  <div id="app" class="min-w-96">
    <div class="control_wrapper">
      <ejs-treeview
        id="treeview"
        :fields="fields"
        cssClass="custom"
        nodeTemplate="nodeTemplate"
        :nodeClicked="handleNodeClick"
      >
        <template #nodeTemplate="{ data }">
          <div :value="JSON.stringify(data)" class="flex items-center gap-3">
            <img
              class="w-8 eimage"
              :src="data.hasChild ? '/icons/folder.svg' : '/icons/pdf.svg'"
              alt="employee"
            />
            <div class="ename">{{ data.name }}</div>
          </div>
        </template>
      </ejs-treeview>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineEmits } from "vue";
import type { NodeClickEventArgs } from "@syncfusion/ej2-vue-navigations";
import { TreeViewComponent as EjsTreeview } from "@syncfusion/ej2-vue-navigations";

var dataSource = [
  {
    id: 1,
    name: "Custom Folder",
    hasChild: true,
    expanded: true,
  },
  {
    id: 2,
    pid: 1,
    hadChild: true,
    name: "Reports",
    hasChild: true,
    expanded: true,
  },
  {
    id: 3,
    pid: 2,
    name: "Report 1.pdf",
    hasChild: false,
    metadata: {
      size: "1.2 MB",
      createdDate: "2023-01-10T14:00:00",
      author: "John Doe",
      lastModifiedDate: "2024-07-12T16:45:00",
      fileType: "PDF",
      pageCount: 10,
      description:
        "Quarterly performance report for Q1 2023, including financial and operational highlights.",
    },
  },
  {
    id: 4,
    pid: 2,
    name: "Report 2.pdf",
    hasChild: false,
    metadata: {
      size: "1.8 MB",
      createdDate: "2023-04-15T09:30:00",
      author: "Jane Smith",
      lastModifiedDate: "2024-08-20T11:10:00",
      fileType: "PDF",
      pageCount: 12,
      description:
        "Detailed project analysis for the mid-year review, including key milestones achieved.",
    },
  },
  {
    id: 5,
    pid: 2,
    name: "Report 3.pdf",
    hasChild: false,
    metadata: {
      size: "2.5 MB",
      createdDate: "2023-10-05T18:20:00",
      author: "Analytics Team",
      lastModifiedDate: "2024-11-01T14:55:00",
      fileType: "PDF",
      pageCount: 18,
      description:
        "Annual summary report with a focus on overall company performance and strategic objectives.",
    },
  },
];

const fields = {
  dataSource: dataSource,
  id: "id",
  parentID: "pid",
  text: "name",
  child: "subChild",
  hasChildren: "hasChild",
};

const emit = defineEmits(["fileSelected"]);

const selectedFileID = ref<string>("");

/**
 * Handle node click event
 * @param {NodeClickEventArgs}  args
 */
const handleNodeClick = (args: NodeClickEventArgs) => {
  selectedFileID.value = args.node.dataset.uid || "";

  // Find the selected node from the dataSource by dfs
  const selectedNode = dataSource.find((node) => {
    return node.id === parseInt(selectedFileID.value);
  });

  if (selectedNode?.hasChild === false) {
    emit("fileSelected", selectedNode);
  }
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";

.control_wrapper {
  display: block;
  width: 100%;
  margin: auto;
  overflow: auto;
  border-radius: 3px;
  text-align: left;
}

.custom .e-list-item .e-fullrow {
  background: transparent;
}

.custom .e-list-item .e-list-text {
  margin-top: 5px;
  margin-bottom: 5px;
}

.eimage {
  float: left;
}

.ename {
  font-size: 16px;
  display: flex;
  align-items: center;
  padding: 3px;
}

.ejob {
  font-size: 14px;
  opacity: 0.87;
}

.e-treeview .e-list-item.e-active {
  color: #000;
}

.e-treeview .e-list-item .e-fullrow {
  background: transparent;
  width: 100%;
  height: 50px;
  border: none;
}

.e-treeview .e-list-item.e-active .e-fullrow {
  background-color: #f9fafb !important;
  width: 100%;
  height: 50px;
  border: none;
}

.e-treeview .e-list-item.e-active .e-list-text {
  color: #71b2f3 !important;
}
</style>
