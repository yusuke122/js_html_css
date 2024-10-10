<script setup>
  const display_mode_control_show=ref(0)
  const map_control_show = ref(0)
  let display_mode_control_ele 
  let map_control_ele
  onMounted({
    display_mode_control_ele= document.getElementById("display_mode_control")
    map_control_ele= document.getElementById("map_control")
  })
  function onClickBtnShowControl(control_type){
    switch(control_type){
      case "display_mode_control":
        if(display_mode_control_ele!=null || undefined){
          if(display_mode_control_show.value==1){
            display_mode_control_ele.style.display='none'
            display_mode_control_show.value=0
          }
          else{
            display_mode_control_ele.style.display='normal'
            display_mode_control_show.value=1
          }
        }
        break;
      case "map_control":
        if(map_control_ele!=null || undefined){
          if(map_control_show.value==1){
            map_control_ele.style.display='none'
            map_control_show.value=0
          }
          else{
            map_control_ele.style.display='normal'
            map_control_show.value=1
          }
        }
        break;
      default:
        break;
    }
  }
</script>
<template>
<!--display_mode_control_show_button-->  
<button class="btn btn-dark display_mode_control_show_button" onclick="onClickBtnShowControl("display_mode_control")">
  <span v-if="display_mode_control_show.value==true">btn_title[10]</span>
  <span v-else>btn_title[11]</span>
</button>
<!---->
  <!--display_mode_control-->      
<div style="display:normal;>
  <div id="display_mode_control" class="display_mode_control">
    <div class="form-check">
      <input class="form-check-input" type="radio" name="display_mode_control" id="displayModeRadio0">
      <label class="form-check-label" for="flexRadioDefault1">
        無線機のみ
      </label>
    </div>
    <div class="form-check" v-for="data in display_mode_title_arr" v-bind:key="data.id">
      <input class="form-check-input" type="radio" name="display_mode_control" id="displayModeRadio1" checked>
      <label class="form-check-label" for="flexRadioDefault2">
        防衛通信（UHF/VHF）
      </label>
    </div>
    <!--地誌選択-->
      <div class="display_geography_mode">
        <div class="form-check">
          <input class="form-check-input" type="radio" name="display_geography_mode_control0" id="displayModeRadio1_0" checked>
          <label class="form-check-label" for="flexRadioDefault1" >
            エリア毎
          </label>
        </div>
        <div class="form-check">
          <div class="display_innerHTML" style="vertical-align:top;">
          <input class="form-check-input" type="radio" name="display_geography_mode_control0" id="displayModeRadio1_1">
          <label class="form-check-label" for="flexRadioDefault2">
            <span >通信グループ毎</span>
          </label>
          </div>
            <div class="display_innerHTML">
              <select class="form-select display_group_select" aria-label="Default select example">
                <option selected>全て</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
        </div>
      </div>                      
    <!----------->
  </div>
<!----------->

<!--map_control_show_button-->  
<!--------------------------->
<!--map_control-------------->  
<!--------------------------->
</template>
<style scoped>
  /**control*/
.display_mode_control_show_button{
   background-color:#444444;
   border:0.1rem solid #000000;
   border-radius:0.2rem;
   height:7vh;
   margin-top:0.5vh;
}
.display_mode_control{
  font-size:0.9rem;
  background-color:#444444;
  width:15vw;
  border:0.1rem solid #000000;
  border-radius:0.2rem;
  padding-left:1rem;
  padding-right:0rem;
}
.display_geography_mode{
  margin-left:1vw
}
.display_group_select{
  margin-left:0.5vw;
  width:1vw;
  height:5vh;
  vertical-align:top;
  font-size:0.1rem;
}
.display_innerHTML{
  display:inline-block;
}
.display_none{
  display:none;
}
</style>
