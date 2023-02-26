import axios from "axios";
import React, { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Check2Circle } from "react-bootstrap-icons";

const DisplayResult = ({ inputValue }) => {
  const [shortenLink, setShortenLink] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios(
        `https://api.shrtco.de/v2/shorten?url=${inputValue}`
      );
      setShortenLink(res.data.result.full_short_link);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (inputValue.length) {
      setError(false);
      fetchData();
    }
  }, [inputValue]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [copied]);

  const renderResult = () => {
    if (error) {
      return <p className="no-data">Invalid URL !</p>;
    } else if (loading) {
      return (
        <div class="loader">
          <div class="inner one"></div>
          <div class="inner two"></div>
          <div class="inner three"></div>
        </div>
      );
    } else {
      return (
        <>
          <p>{shortenLink}</p>
          <CopyToClipboard text={shortenLink} onCopy={() => setCopied(true)}>
            <button
              className={copied ? "copied" : ""}
              disabled={shortenLink.length ? false : true}
            >
              {copied ? (
                <>
                  <span>
                    Copied <Check2Circle />
                  </span>
                </>
              ) : (
                "Copy to clipboard"
              )}
            </button>
          </CopyToClipboard>
        </>
      );
    }
  };

  return (
    <>
      <div className="result">{renderResult()}</div>
    </>
  );
};

export default React.memo(DisplayResult);
