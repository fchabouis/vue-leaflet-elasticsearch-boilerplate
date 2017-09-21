<template>
  <div>
    <div class="sidebar-tabs">
      <ul role="tablist">
        <li><a href="#welcome" role="tab"><abbr title="Welcome !"><i class="glyphicon glyphicon-star"></i></abbr></a></li>
        <li><a href="#settings" role="tab"><abbr title="Settings"><i class="glyphicon glyphicon-tasks"></i></abbr></a></li>
        <li><a href="#help" role="tab"><abbr title="Help"><i class="glyphicon glyphicon-question-sign"></i></abbr></a></li>
      </ul>
    </div>

    <!-- Tab panes -->
    <div class="sidebar-content">
      <div class="sidebar-pane" id="welcome">
        <h1 class="sidebar-header">Welcome to the map<span class="sidebar-close"><i class="glyphicon glyphicon-triangle-left"></i></span></h1>
        <h2>Thanks to the sidebar-v2</h2>
          You can use this sidebar and its tabs to add features to your map
      </div>

      <div class="sidebar-pane" id="settings">
        <h1 class="sidebar-header">Settings<span class="sidebar-close"><i class="glyphicon glyphicon-triangle-left"></i></span></h1>
        <settingsTab></settingsTab>          
      </div>

      <div class="sidebar-pane" id="help">
        <h1 class="sidebar-header">Help<span class="sidebar-close"><i class="glyphicon glyphicon-triangle-left"></i></span></h1>
        <h2>You could write some help here</h2>
          Click on the map to explore the data.
      </div>
    </div>
  </div>
</template>

<script>
import settingsTab from './settings-tab'

export default {
  components: {
    settingsTab
  },
  computed: {},
  methods: {}
}
</script>

<style>
.sidebar-tabs{
  border-right: 1px solid #bebebe;
}

.categoryTitle {
  background-color: #bebebe;
  margin: 0px -20px;
  text-align: center;
  padding: 10px 0px;
  font-weight: bold;
  font-size: 18px;
}

.sidebar-content > .sidebar-pane > div {
  margin-top: 30px;
  padding-right: 40px;
}
</style>
