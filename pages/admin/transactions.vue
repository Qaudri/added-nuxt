<template>
  <div>
    <LayoutsAdminApp>
      
    </LayoutsAdminApp>
  </div>
</template>

<script>
export default {
  methods: {
    ...mapActions({
      setAllTransactions: 'transactions/setStudentTransactions'
    })
  },

  computed: {
    ...mapGetters({
      allTransactions: 'transactions/getStudentTransactions',
    }),
  },
}
</script>

<style>

</style>