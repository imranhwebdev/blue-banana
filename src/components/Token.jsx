import { useState } from "react";
import { LuCopy, LuCopyCheck } from "react-icons/lu";

export default function Token({ address = "x1YCdyt6CT1DZVBMugtSRRk4VJEzkboPLFZHoM6pump" }) {
    const token = address;
    const [copied, setCopied] = useState(false);
    const copyHandle = () => {
        navigator.clipboard.writeText(token);
        setCopied(true);
        setTimeout(() => {
            setCopied(false)
        }, 3000)
    }
    return (
        <div className="token">
            <div className="token-wrap">
                <p className="tokentxt">{token}</p>
                <button onClick={() => copyHandle()}>
                    {copied ? <LuCopyCheck /> : <LuCopy />}
                </button>
            </div>
        </div>
    )
}