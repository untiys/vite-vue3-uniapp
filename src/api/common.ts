import baseRequest from "@/utils/request"

export function getPage() {
  return baseRequest("GET", "/society/getTypeCount")
}
