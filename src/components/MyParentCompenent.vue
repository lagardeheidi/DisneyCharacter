// MyParentComponent.vue
<template>
    
    <div id="myParentComponent">
        <MyComponent id="component1"/>
        <MyComponent id="component2"/>
    </div>
    
</template>

<script>

import MyComponent from
"./components/MyComponent"

export default {
name: 'myParentComponent',
components: { MyComponent }
}

</script>