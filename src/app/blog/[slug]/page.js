export default function Page( params ) {
    return(<div>
        <h1 className="text-heading"> Blog Title : {params.slug}  </h1> 
        </div>
    );
}