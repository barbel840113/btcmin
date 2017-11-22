/** app/models/search-query.model.ts **/
export interface CurrentSearch {
    name: string;
    location?: {
        latitude: number,
        longitude: number
    },
    radius: number
}