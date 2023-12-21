<template>
    <div class="alert alert-danger">{{ msg }}</div>
</template>
  
<script>
export default {
    name: "Errors",
    props: ["msg"]
};
</script>