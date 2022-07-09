<template>
  <nav>
    <router-link to="/">first</router-link> /
    <router-link to="/second">second</router-link>
  </nav>
  <main>
    <RouterView v-slot="{ Component }">
      <KeepAlive>
        <Suspense>
          <!-- main content -->
          <component :is="Component"></component>

          <!-- loading state -->
          <template #fallback> Loading... </template>
        </Suspense>
      </KeepAlive>
    </RouterView>
  </main>
</template>
