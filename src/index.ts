import diff from "@ba0918/stackgamesempire-gift-list-diff"
import * as fs from "fs"

export async function start(
  url: string,
  steamkey: string,
  steamid: string,
  output: string
): Promise<void> {
  return diff(url, steamkey, steamid).then(res => {
    const text: string[] = []

    // owned games
    text.push("【Owned games】")
    res.owned_gifts.map((gift: any) => text.push(gift.name))
    text.push("", "")

    // unowned games
    text.push("【Unowned games】")
    res.unowned_gifts.map((gift: any) => text.push(gift.name))

    // output
    fs.writeFileSync(output, text.join("\r\n"), "utf8")
  })
}
