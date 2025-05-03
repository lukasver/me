export interface PageProps<T = { [key: string]: any }> {
  params: Promise<T>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}
