export default function({store, redirect }){
  if (store.state.authentication.student_token == null){
    return redirect('login');
  }
}