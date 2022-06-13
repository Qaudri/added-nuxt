export default function({store, redirect }){

  if (store.state.authentication.admin_token == null){
    return redirect('/admin/login');
  }
}