import { Observable } from 'rxjs'

export default function subscriber(
  observable: Observable<unknown>,
): Promise<any> {
  return new Promise((resolve, reject) => {
    observable.subscribe({
      next: (response) => {
        resolve(response)
      },
      error: (error) => {
        reject(new Error(error.message || 'Something went wrong'))
      },
    })
  })
}
