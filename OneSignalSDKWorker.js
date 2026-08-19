/* Marine HQ Crew — push service worker.
   A push notification can only be delivered to a phone whose browser is closed
   if a service worker is registered to receive it. This is that worker: it does
   nothing but hand the job to OneSignal's SDK.
   It must stay at this path (https://marinehq.github.io/crew/OneSignalSDKWorker.js)
   — push silently stops working if it moves. */
importScripts('https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js');
