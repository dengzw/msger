<template>
  <div class="me-phone">
    <div class="phone-desk">
      <div class="desk-top"></div>
      <div class="desk-body"></div>
      <div class="desk-footer"></div>
    </div>
    <div class="phone-back"></div>
  </div>
</template>
<style lang="less" scoped>

.me-phone {
  position: relative;
  width: 375px;
  height: 812px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #2c3142;
  padding: 24px;
  border-radius: 24px;
  perspective: 500;

  .me-phone-cover {
    width: 100%;
    height: 100%;
  }

  // transform:   translateZ(-300px) rotateY(-15deg) rotateX(36deg) rotate(10deg);
  .me-phone-head {
    padding: 24px;

    h1 {
      font-size: 24px;
      text-align: center;
      letter-spacing: 5px;
    }

    h4 {
      padding: 24px;
      height: 80px;
      border-radius: 24px;
      font-size: 24px;
      font-weight: 100;
      text-align: center;
      animation: textColor 10s ease infinite;
    }
  }

  .boot-footer {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 48px;
  }

  .me-phone-list {
    width: 100%;
    flex: 1;
    margin: 0 auto;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;

    .me-phone-item {
      display: flex;
      align-items: center;
      flex-direction: column;
      font-size: 12px;
      user-select: none;

      .me-phone-label {
        opacity: .5;
      }
    }
  }

  .me-phone-card {
    width: 64px;
    height: 64px;
    margin: 12px;
    border-radius: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    color: #eee;
    cursor: pointer;
    user-select: none;
    text-transform: uppercase;
    text-shadow: 1px 1px 3px #2c3142, 0 0 0 rgba(0, 0, 0, 0.8), 1px 1px 4px #000;
  }
}

.squishy {
  position: relative;
  color: #fff;
  text-align: center;
  background: #262939;
  box-shadow: inset 5px 5px 15px #2c3142, inset -5px -5px 15px rgb(38, 41, 57), 3px 3px 5px rgba(0, 0, 0, 0.7);
  transition: box-shadow 0.15s;
}

.squishy:active {
  transform: rotate(1deg);
  box-shadow: inset 1px 1px 1px rgba(150, 150, 150, .5), inset -1px -1px 1px rgba(0, 0, 0, .5), 1px 1px 1px rgba(0, 0, 0, .7);
}

.squishy span {
  position: absolute;
  pointer-events: none;
  /* This helps IE */
  display: inline-block;
  white-space: nowrap;
  top: 0;
  left: 0;
  vertical-align: middle;
  line-height: 75px;
  /*change to btn height*/
  width: 100%;
  height: 100%;
  -webkit-transition: transfrom .15s;
  -moz-transition: transfrom .15s;
  -ms-transition: transfrom .15s;
  transition: transfrom .15s;
}

.squishy:active span {
  -webkit-transform: scale(.95);
  transform: scale(.95);
}

.call-me {
  width: 80px;
  height: 80px;
  position: relative;
  overflow: hidden;
  font-size: 30px;
  color: #fff;
  background-color: #262939;
  box-shadow: inset 5px 5px 15px #617eff, inset -5px -5px 15px rgb(38, 41, 57), 3px 3px 5px rgba(81, 215, 255, 0.4);
  border: none;
  animation: textColor 10s ease infinite;

}

@keyframes textColor {
  0% {
    color: #7e0fff;
  }

  50% {
    color: #0fffc1;
  }

  100% {
    color: #7e0fff;
  }
}

</style>