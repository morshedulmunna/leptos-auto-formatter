use leptos::*;

#[component]
pub fn App() -> impl IntoView {
    let (count, set_count) = create_signal(0);
    let double_count = move || count() * 2;

    view! {
        <div class="container">
            <h1>"Welcome to Leptos!"</h1>
            <button on:click=move |_| set_count.update(|n| *n += 1)>"Click me: " {count}</button>
                                 <p>"Double count: " {double_count}</p>
        </div>
    }
}

fn main() {
    leptos::mount_to_body(App)
}
