export default function Page({ params } : { params : { pageSlug : any }}) {
    return <div className="mt-20 lg:mt-24">
                <section className="w-full h-64 bg-no-repeat bg-fit bg-gray-400 bg-blend-multiply relative border-b border-gray-700 bg-[url('/background_cover.jpg')]">
                    <div className="absolute top-20 left-1/2 px-4 mx-auto w-full max-w-screen-xl -translate-x-1/2 xl:top-1/2 xl:-translate-y-1/2 xl:px-0">
                        <h1 className="max-w-4xl text-3xl font-extrabold text-white">{params.pageSlug ?? "Error!"}</h1>
                    </div>
                </section>
                <section className="flex relative z-20 min-h-96 justify-center px-4 mx-auto max-w-screen-lg">
                    <div className="w-full py-6">
                        <div className="space-y-4 text-gray-900 dark:text-gray-300 h-full">{params.pageSlug ?? "Error!"}</div>
                    </div>
                </section>
            </div>
}