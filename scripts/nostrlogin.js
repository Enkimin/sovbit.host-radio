if (window.nostr) {
    // The window.nostr object is available, so we can use its methods
    window.nostr.getPublicKey().then((publicKey) => {
      // Use the publicKey as desired
      const iframe = document.querySelector('iframe');
      iframe.contentWindow.postMessage({ publicKey }, '*');
    });
  
    const event = {
      // Define the event object
    };
    window.nostr.signEvent(event).then((signedEvent) => {
      // Use the signed event as desired
      const iframe = document.querySelector('iframe');
      iframe.contentWindow.postMessage({ signedEvent }, '*');
    });
  }