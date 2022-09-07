<template>
  <div>
    <h1>Jobs</h1>
    <div v-for="(job, index) in jobs" class="job" :key="job.id">
      <router-link :to="{ name: 'jobdetails', params: { id: job.id}}">
        <h2>{{ job.title }}</h2>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default{
    
    data(){
      return{
        jobs: [
          {title: 'Developer', id: 1, details: 'lorem'},
          {title: 'Devops', id: 2, details: 'lorem'},
          {title: 'SysOps', id: 3, details: 'lorem'},
          {title: 'Designer', id: 4, details: 'lorem'},
        ]
      }
    }
  }

</script>

<style scoped>
  .job h2{
    background: #f4f4f4;
    padding: 20px;
    border-radius: 10px;
    margin: 10px auto;
    max-width: 600px;
    cursor: pointer;
    color: #444;
  }
  .job h2:hover{
    background: #ddd;
  }
  .job a{
    text-decoration: none;
  }
</style>