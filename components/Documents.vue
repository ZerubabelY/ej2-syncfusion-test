<template>
  <div id="app" class="overflow-y-hidden min-w-80">
    <div>
      <h1
        class="text-xl text-center py-2 font-medium poppins bg-[#cbdcec] text-[#71b2f3] rounded"
      >
        Files
      </h1>
    </div>
    <div class="mt-3 control_wrapper">
      <ejs-treeview
        id="treeview"
        :fields="fields"
        cssClass="custom"
        nodeTemplate="nodeTemplate"
        :nodeClicked="handleNodeClick"
      >
        <template #nodeTemplate="{ data }">
          <div
            :value="JSON.stringify(data)"
            class="flex items-center gap-3"
            :class="{
              'active-node-item': data.id == selectedFileID,
            }"
          >
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
import { dataSource } from "~/helper/data/dummy";

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
  border-radius: 10px;
}

.e-treeview .e-list-item.e-active .e-fullrow {
  background-color: transparent !important;
  width: 100%;
  height: 50px;
  border: none;
}

.e-treeview .e-list-item.e-active > .e-fullrow {
  background-color: #f9fafb !important;
}

.e-treeview .e-list-item.e-active .e-list-text {
  /*color: transparent !important;*/
}

.e-treeview .e-list-item.e-active .e-list-text .active-node-item {
  color: #71b2f3 !important;
}

.e-treeview .e-text-content {
  padding: 0px;
  padding-left: 10px;
}
</style>
