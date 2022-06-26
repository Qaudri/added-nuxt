<template>
  <div>
    <LayoutsAdminApp>
      <template v-slot:hero>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-10">
          <div class="bg-white border p-6 justify-between items-center flex">
            <div>
              <p class="font-medium uppercase text-sm">Available courses</p>
              <h1 class="font-semibold text-4xl mb-3">10</h1>
              <a href="/students/courses" class="px-2 py-1 text-sm border">Check</a>
            </div>

            <img :src="require('@/assets/images/icons/list.svg')" class="p-2 bg-primary-100 w-14" alt="">
          </div>

          <div class="bg-white boder p-6 justify-between items-center flex">
            <div>
              <p class="font-medium uppercase text-sm">Registered Students</p>
              <h1 class="font-semibold text-4xl mb-3">0</h1>
              <a href="" class="px-2 py-1 text-sm border">Manage</a>
            </div>

            <img :src="require('@/assets/images/icons/categories.svg')" class="p-2 bg-primary-100 w-14" alt="">
          </div>

          <div class="bg-white border p-6 justify-between items-center flex">
            <div>
              <p class="font-medium uppercase text-sm">Your transactions</p>
              <h1 class="font-semibold text-4xl mb-3 max-w-xs">#0.00</h1>
              <a href="/transactions" class="px-2 py-1 text-sm border">Manage</a>
            </div>

            <img :src="require('@/assets/images/icons/earning.svg')" class="p-2 bg-primary-100 w-14" alt="">
          </div>

        </div>
      </template>
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