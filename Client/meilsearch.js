const { MeiliSearch } =require( 'meilisearch')

const client = new MeiliSearch({
  host: '',
  apiKey: '',
})
// console.log(client);

const index = client.index('movies2')

const documents = [
    { id: 1, title: 'Carol', genres: ['Romance', 'Drama'] },
    { id: 2, title: 'Wonder Woman', genres: ['Action', 'Adventure'] },
    { id: 3, title: 'Life of Pi', genres: ['Adventure', 'Drama'] },
    { id: 4, title: 'Mad Max: Fury Road', genres: ['Adventure', 'Science Fiction'] },
    { id: 5, title: 'Moana', genres: ['Fantasy', 'Action']},
    { id: 6, title: 'Philadelphia', genres: ['Drama'] },
    { id: 7, title: 'Philadelphia', genres: ['RomCom'] }
]
let response;
// If the index 'movies' does not exist, Meilisearch creates it when you first add the documents.
const addDocs=async ()=>{
    response = await index.addDocuments(documents);
    console.log(response)
}

const searchElements=async()=>{
    const search = await index.search('Philadelphia').then((id)=>{
        console.log(id);
    });
    console.log(search);
    return search;
}
try{
    //  addDocs();
    const response= searchElements();
    console.log(response);
}catch(e){
    console.log(e);
}

