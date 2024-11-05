<script>
  import '$lib/styles.scss';
  import '$lib/tidbytes.scss';
  import { bytes } from '$lib/bytes.js'
  import { SquareMousePointer, Clipboard, ClipboardCheck } from 'lucide-svelte';

  let popup = bytes[1];
  let popup_open = false;
  let popup_tab = "HTML";

  function togglePopup(i) {
    popup_open = !popup_open
    popup = bytes[i]
  }

  let copied = false;
  
  function copy() {
    try {
      if (popup_tab == "HTML") {
        navigator.clipboard.writeText(popup.html)
      } else {
        navigator.clipboard.writeText(popup.css)
      }

      copied = true;
    } catch (err) {
      console.error(err)
    }
  }
</script>

<svelte:head>
  <title>Tidbytes</title>
</svelte:head>

<main>
  <header>
    <h1>Tidbytes</h1>
  </header>

  <div class="bytes">
    {#each bytes as byte, i}
      <div class="byte" style={`--min-width: ${byte.width}px;`}>
        <div class="byte-info">
          <div class="info-top">
            <h2>{byte.name}</h2>
            <p>{(i + 1).toString().padStart(3, '0')}</p>
          </div>
          <div class="info-bottom">
            <button on:click={() => {togglePopup(i)}}>View Code</button>
            <SquareMousePointer size="16"/>
          </div>
        </div>
        <div class="byte-content">
          {@html byte.html}
        </div>
      </div>
    {/each}
  </div>
  
  <div class={popup_open ? "code-popup" : "code-popup hidden"}>
    <div class="popup-content">
      <h2>Code for {popup?.name}</h2>
      <div class="popup-menu">
        <div class="selector">
          <input type="radio" value="HTML" id="HTML" name="tab" bind:group={popup_tab}/>
          <label for="HTML">HTML</label>
          <input type="radio" value="CSS" id="CSS" name="tab" bind:group={popup_tab}/>
          <label for="CSS">CSS</label>
        </div>
        <button class="copy-button" on:click={copy} on:mouseleave={() => {copied = false}}>
          <div class="icon">
            {#if copied}
              <ClipboardCheck size="16"/>
            {:else}
              <Clipboard size="16"/>
            {/if}
          </div>
        </button>
      </div>
      <code class="popup-code">
        {#if popup_tab == "HTML"}
          {popup?.html}
        {:else if popup_tab == "CSS"}
          {popup?.css}
        {/if}
      </code>
    </div>
    <button class="popup-background" aria-label="close" on:click={() => {popup_open = false}}></button>
  </div>
</main>

<footer>
  <p>Made by <a href="//www.samcheng.co" target="_blank">Sam</a></p>
  <a href="mailto:sam@samcheng.co">Contact</a>
</footer>