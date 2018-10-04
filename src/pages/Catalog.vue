<template>
  <div class="content">
    <div class="md-layout">
      <p>&nbsp;</p>
      <h5 class="text-center">Dynamic Control : Text Box, Dropdown List, Radiobox and Checkbox</h5>
      <section class="container">
        <div class="table table-responsive">
          <table class="table table-responsive table-striped table-bordered">
            <thead>
            <tr>
              <td>TextBox</td>
              <td>Dropdown List</td>
              <td>Radio</td>
              <td>CheckBox</td>
              <td>BTN</td>
            </tr>
            </thead>
            <tbody id="TextBoxContainer">
            </tbody>
            <tfoot>
            <tr>
              <th colspan="5">
                <button id="btnAdd" type="button" class="btn btn-primary" data-toggle="tooltip" data-original-title="Add more controls"><i class="glyphicon glyphicon-plus-sign"></i>&nbsp; Add&nbsp;</button></th>
            </tr>
            </tfoot>
          </table>
        </div>
      </section>
      <!--<user-main-content>-->
      <!--</user-main-content>-->
    </div>
  </div>
</template>

<script>
import {
  UsersMainContent
} from '@/pages'

export default{
  components: {
    UsersMainContent
  },
  name: 'Catalog.vue'
}
</script>
