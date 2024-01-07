<script setup>
defineProps(['valItem'])
</script>

<!-- #TODO показать и те на которые немного не хватает -->
<template>
  <div class="witch-roll-box">
    <template :key="roll" v-for="roll in valItem[2]">
      <div class="witch-roll">
        <div>
          Ролик <span>{{ roll[0] }}</span
          ><i>m</i>
        </div>
        <div>
          запас <span>{{ roll[1] }}</span
          ><i>m</i>
        </div>
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.witch-roll-box {
  z-index: 1;
  position: relative;
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  // background: red;
  // margin-top: -22px;
  margin-bottom: -6px;
  // margin-bottom:-7px ;
  &:empty {
    display: none;
  }
}
.witch-roll {
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  font-size: 0.7em;
  margin-right: 5px;
  margin-top: 5px;
  background: var(--m3-color-accent);
  color: white;
  padding: 2px 6px;
  border-radius: 6px;
  position: relative;
  overflow: hidden;
  // border: 1px solid rgb(0, 0, 0);
  border-bottom-left-radius: 0;
  &::before {
    content: '';
    transform: rotate(45deg);
    background: rgba(0, 0, 0, 0.367);
    position: absolute;
    bottom: -15px;
    left: -15px;
    width: 23.9px;
    height: 23.9px;
  }
  & span {
    font-size: 1.7em;
    line-height: 1em;
  }
  i {
    font-size: 0.9em;
    margin-left: 2px;
    opacity: 0.6;
  }
}
</style>
