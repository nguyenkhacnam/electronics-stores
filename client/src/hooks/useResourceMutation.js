import { useMutation } from "@tanstack/react-query"

export const useResourceMutation = (callbackFunction) => {
  const mutation = useMutation({
    mutationFn: callbackFunction
  })

  return mutation
}