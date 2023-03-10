import * as _Rollup from 'rollup'
import * as _Vite from 'vite'
import * as http from 'node:http'

import { WebExtensionOptions as _Options } from './index'

declare global {
	type WebExtensionOptions = _Options

	namespace Rollup {
		type InputOptions = _Rollup.InputOptions
		type OutputOptions = _Rollup.OutputOptions
		type SourceMap = _Rollup.SourceMap
		type EmittedFile = _Rollup.EmittedFile
		type EmittedAsset = _Rollup.EmittedAsset
		type OutputAsset = _Rollup.OutputAsset
		type OutputBundle = _Rollup.OutputBundle
		type OutputChunk = _Rollup.OutputChunk
	}

	namespace Vite {
		type Manifest = _Vite.Manifest
		type ManifestChunk = _Vite.ManifestChunk
		type PluginOption = _Vite.PluginOption
		type UserConfig = _Vite.UserConfig
		type BuildOptions = _Vite.BuildOptions
		type HmrOptions = _Vite.HmrOptions
		type ResolvedConfig = _Vite.ResolvedConfig
		type ViteDevServer = _Vite.ViteDevServer

		namespace Connect {
			type IncomingMessage = _Vite.Connect.IncomingMessage
			type OutgoingMessage = http.ServerResponse
			type NextFunction = _Vite.Connect.NextFunction
		}
	}
}

declare module 'rollup' {
	export interface RenderedChunk {
		viteMetadata: ChunkMetadata
	}
}
